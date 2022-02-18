import react from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Components/Header.component';
import CategoryList from '../Components/CategoryList.component';
import Search from '../Components/Search.component';
import AddAnegdot from '../Components/AddAnegdot.component';
import AnegdotList from '../Components/AnegdoteList.component';

describe('<Header />', () => {
    test('<Header /> component is rendered', () => {
        render(<Header />);
        const header = screen.getByText('Anegdotes App');
        expect(header).toBeInTheDocument();
    });
});

describe('<CategoryList />', () => {
    test('<CategoryList /> component is rendered', () => {
        const { container } = render(<CategoryList />);
        const categoryList = container.querySelector('.category-list');
        expect(categoryList).toBeInTheDocument();
    });
});

describe('<Search />', () => {
    test('<Search /> component is rendered', () => {
        const { container } = render(<Search />);
        const search = container.querySelector('.search');
        expect(search).toBeInTheDocument();
    });
});

describe('<AddAnegdot />', () => {
    test('<AddAnegdot /> component is rendered', () => {
        const { container } = render(<AddAnegdot />);
        const addAnegdot = container.querySelector('.modal');
        expect(addAnegdot).toBeInTheDocument();
    });
});