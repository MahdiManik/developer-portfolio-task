"use client";

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  name?: string; // Component name for better error reporting
  onError?: (error: Error, errorInfo: ErrorInfo) => void; // Optional error callback
  resetOnPropsChange?: boolean; // Reset error state when props change
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorStack?: string;
}

/**
 * ErrorBoundary Component
 * Catches JavaScript errors in child component tree and displays fallback UI
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state with the error to render fallback UI
    return { 
      hasError: true, 
      error,
      errorStack: error.stack 
    };
  }

  // If props change and resetOnPropsChange is true, reset error state
  static getDerivedStateFromProps(props: Props, state: State): State | null {
    if (props.resetOnPropsChange && state.hasError) {
      return { hasError: false };
    }
    return null;
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console in development
    console.error(`Error in ${this.props.name || 'component'}:`, error, errorInfo);
    
    // Update state with additional error info for debugging
    this.setState({ errorInfo });
    
    // Call optional error handler (could send to logging service)
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    
    // In a production app, you would send this to an error reporting service
    // Example: sendToErrorReporting(error, errorInfo, this.props.name);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined, errorStack: undefined });
  }

  render(): ReactNode {
    const { hasError, error, errorStack } = this.state;
    const { children, fallback, name } = this.props;

    if (hasError) {
      // Use custom fallback if provided
      if (fallback) {
        return fallback;
      }
      
      // Default enhanced error UI
      return (
        <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg max-w-lg mx-auto my-8 text-center">
          <div className="text-red-500 mb-4">
            <AlertCircle size={48} />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Component Error
          </h2>
          
          {name && (
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Error in <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">{name}</code>
            </p>
          )}
          
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/50 rounded p-3 mb-4 w-full">
            <p className="text-red-800 dark:text-red-300 text-sm font-medium">
              {error?.message || 'An unexpected error occurred'}
            </p>
          </div>
          
          {process.env.NODE_ENV === 'development' && errorStack && (
            <details className="mb-4 w-full text-left">
              <summary className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-gray-200">
                View error details
              </summary>
              <pre className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 text-xs rounded overflow-auto max-h-64">
                {errorStack}
              </pre>
            </details>
          )}
          
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              onClick={this.handleReset}
              className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors gap-1"
              aria-label="Try again"
            >
              <RefreshCw size={16} />
              <span>Try Again</span>
            </button>
            
            <Link 
              href="/" 
              className="flex items-center justify-center px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md transition-colors gap-1"
              aria-label="Return home"
            >
              <Home size={16} />
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      );
    }

    // Render children if no error
    return children;
  }
}

export default ErrorBoundary;
