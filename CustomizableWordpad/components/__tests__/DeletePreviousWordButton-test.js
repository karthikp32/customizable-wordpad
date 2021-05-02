import * as React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import {DeletePreviousWordButton} from '../DeletePreviousWordButton';

it(`given button exists and user has typed something
when user pressed deletes previous word button 
then previous word is deleted from wordpad`, () => {
    const { getByTestId } = render(<DeletePreviousWordButton/>);
    fireEvent.press(getByTestId('DeletePreviousWord.Button'));
})