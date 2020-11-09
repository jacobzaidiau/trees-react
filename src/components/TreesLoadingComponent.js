import React from 'react';

function TreesLoadingComponent(Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on, trees take time to grow
      </p>
    );
  };
}
export default TreesLoadingComponent;