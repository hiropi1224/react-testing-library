import React from 'react';

export const Render = () => {
  return (
    <div>
      <h1>React Testing Library</h1>
      <input type="text" />
      <button type="button">Click 1</button>
      <button type="button">Click 2</button>
      <p>Test</p>
      <span data-testId="copyright">@React</span>
    </div>
  );
};
