import { NextRequest, NextResponse } from 'next/server';

interface RecaptchaResponse {
  tokenProperties: {
    valid: boolean;
    action: string;
    createTime: string;
  };
  riskAnalysis: {
    score: number;
    reasons: string[];
  };
  event: {
    token: string;
    siteKey: string;
    expectedAction: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const { token, action } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Missing reCAPTCHA token' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RECAPTCHA_API_KEY;
    const projectId = process.env.RECAPTCHA_PROJECT_ID;
    const siteKey = '6LeEL0QsAAAAAOdOJFRc9PxAimmuVchWMVZjBcBk';

    if (!apiKey || !projectId) {
      console.error('Missing reCAPTCHA environment variables');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: {
            token,
            siteKey,
            expectedAction: action || 'SUBMIT_FORM',
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('reCAPTCHA API error:', errorText);
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA verification failed' },
        { status: 500 }
      );
    }

    const data: RecaptchaResponse = await response.json();

    // Check if token is valid
    if (!data.tokenProperties?.valid) {
      return NextResponse.json(
        { success: false, error: 'Invalid reCAPTCHA token', score: 0 },
        { status: 400 }
      );
    }

    const score = data.riskAnalysis?.score ?? 0;

    // Return error if score is below 0.5
    if (score < 0.5) {
      return NextResponse.json(
        {
          success: false,
          error: 'reCAPTCHA score too low',
          score,
          reasons: data.riskAnalysis?.reasons
        },
        { status: 403 }
      );
    }

    return NextResponse.json({
      success: true,
      score,
      action: data.tokenProperties?.action,
    });
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
