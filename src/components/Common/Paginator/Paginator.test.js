import React from 'react';
import { create } from 'react-test-renderer';
import Paginator from './Paginator';

describe('Paginator component test', () => {
    test('button NEXT should be present while pages count is more than 10', () => {
        const component = create(<Paginator totalUsersCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        let button = root.findAllByType('button');
        expect(button.length).toBe(1);
    });
})