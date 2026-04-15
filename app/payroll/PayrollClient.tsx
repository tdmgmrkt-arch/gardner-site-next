'use client';

import { useState, useEffect } from 'react';

export default function PayrollClient() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    // Hide site header, top bar, and footer on this page
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const topBar = header?.previousElementSibling as HTMLElement | null;
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (topBar) topBar.style.display = 'none';
    return () => {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
      if (topBar) topBar.style.display = '';
    };
  }, []);

  useEffect(() => {
    fetch('/api/payroll-auth')
      .then((res) => {
        if (res.ok) setAuthenticated(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const res = await fetch('/api/payroll-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setAuthenticated(true);
      } else {
        setError('Incorrect password');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium text-slate-600">Loading portal...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Login card - visible when not authenticated, or authenticated but iframe still loading */}
      {(!authenticated || !iframeLoaded) && (
        <div className="flex justify-center px-4 pt-10 pb-12 sm:px-6 lg:px-8" style={{ minHeight: authenticated ? undefined : '100vh' }}>
          <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-slate-100 h-fit">
            <div className="text-center mb-8">
              <img src="/gardner_logo.webp" alt="Gardner Plumbing Co." className="h-20 mx-auto mb-4" />
              <p className="mt-2 text-sm text-slate-500 font-medium uppercase tracking-wider flex items-center justify-center gap-1.5">
                <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure Payroll Access
              </p>
            </div>

            {authenticated ? (
              <div className="flex flex-col items-center py-4">
                <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <p className="mt-4 text-sm font-medium text-slate-500">Loading payroll dashboard...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                    Master Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                    placeholder="Enter password to continue"
                    autoFocus
                    required
                  />
                </div>

                {error && (
                  <div className="p-3 rounded-md bg-red-50 border border-red-200">
                    <p className="text-sm text-red-600 text-center font-medium">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-[#0B1F3A] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {submitting ? 'Verifying Credentials...' : 'Sign In to Dashboard'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Iframe - starts loading once authenticated, hidden until loaded */}
      {authenticated && (
        <div className={`w-full h-screen min-h-[1000px] overflow-hidden flex justify-center ${iframeLoaded ? '' : 'h-0 overflow-hidden'}`}>
          <iframe
            src="https://script.google.com/macros/s/AKfycby1E1c5_0xDSsrDznZbHBUQzuQcEHCRBRQscjuk2y2rymu4zVyZiD4eS6zzH83G3A6kmQ/exec"
            className="w-full max-w-5xl h-full border-0 bg-transparent"
            title="Gardner Plumbing Payroll Processor"
            onLoad={() => setIframeLoaded(true)}
          />
        </div>
      )}
    </div>
  );
}