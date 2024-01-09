import React from 'react';
import {Suspense, useState, useTransition} from 'react';
import './App.css';

import {Varnamala} from './pages/lesson1/varnamala';
import {CardGrid} from './pages/lesson1/cardgrid';
import {Layout} from './components/layout';

function App() {
    return (
        <Suspense fallback={< BigSpinner />}>
            <Router/>
        </Suspense>
    );
}

function Router() {
    const [page,
        setPage] = useState('/');
    const [isPending,
        startTransition] = useTransition();

    function navigate(url: React.SetStateAction<string>) {
        startTransition(() => {
            setPage(url);
        });
    }

    let content;
    if (page === '/') {
        content = (<Varnamala navigate={navigate}/>);
    } else if (page === '/cards') {
        content = (<CardGrid />);
    }
    return (
        <Layout isPending={isPending}>
            {content}
        </Layout>
    );
}

function BigSpinner() {
    return <h2>🌀 Loading...</h2>;
}

export default App;
