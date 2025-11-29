import React from 'react';
import Cousin from './Cousin';

const Aunty = () => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className='flex'>
                <Cousin name='Tommy'></Cousin>
                <Cousin name='Jenny'></Cousin>
            </section>
        </div>
    );
};

export default Aunty;