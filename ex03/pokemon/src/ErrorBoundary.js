import React from "react";

class ErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  render() {
    const { error } = this.state;
    const { FallbackComp, resetFunction, children } = this.props;
    if (error) {
      // You can render any custom fallback UI
      return <FallbackComp error={error} />;
    }

    return children;
  }
}

export default ErrorBoundary;
