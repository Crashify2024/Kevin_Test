import React from 'react'

const LoadingIndicator: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <div className="w-16 h-16 border-4 border-primary border-solid rounded-full animate-spin border-t-transparent"></div>
    </div>
  )
}

export default LoadingIndicator

