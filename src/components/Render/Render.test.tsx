import { render, screen } from '@testing-library/react';
import React from 'react';
import { Render } from './Render';

describe('Rendering', () => {
  it('Should render all the elements correctly', () => {
    render(<Render />);
    // screen.debug();
    // screen.debug(screen.getByRole('heading'));
    expect(screen.getByRole('heading')).toBeTruthy(); // heading要素があるか
    expect(screen.getByRole('textbox')).toBeTruthy(); // textboxがあるか
    expect(screen.getAllByRole('button')[0]).toBeTruthy(); // buttonがあるか
    expect(screen.getAllByRole('button')[1]).toBeTruthy(); // buttonがあるか
    expect(screen.getByText('Test')).toBeTruthy(); // 該当するテキストがあるか
    expect(screen.queryByText('Teeeest')).toBeNull(); // 該当するテキストが存在しない
    expect(screen.getByTestId('copyright')).toBeTruthy(); // 該当するdata-testIdがあるか
  });
});
