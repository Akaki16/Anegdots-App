import react from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Components/Header.component';
import CategoryList from '../Components/CategoryList.component';
import Search from '../Components/Search.component';

describe('<Header />', () => {
    test('header component is rendered', () => {
        render(<Header />);
        const header = screen.getByText('Anegdotes App');
        expect(header).toBeInTheDocument();
    });
});

describe('<CategoryList />', () => {
    test('category list component is rendered', () => {
        const { container } = render(<CategoryList />);
        const categoryList = container.querySelector('.category-list');
        expect(categoryList).toBeInTheDocument();
    });
});

describe('<Search />', () => {
    test('search component is rendered', () => {
        const { container } = render(<Search />);
        const search = container.querySelector('.search');
        expect(search).toBeInTheDocument();
    });
});