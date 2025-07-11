import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

//styles
import './form-comp.scss';

export default function FormComp() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 10;
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const currentItem = data.slice(startIndex, endIndex);
    const [input, setInput] = useState('');
    const [searchValues, setSearchValues] = useState(currentItem)
    const totalPage = Math.ceil(searchValues.length / itemPerPage);
    const paginatedItems = searchValues.slice(startIndex, endIndex);

    useEffect(() => {
        if (input.trim() === '') {
            setSearchValues(data);
        }
    }, [currentPage, input]);

    const options = {
        includeScore: true,
        threshold: 0.1,

        keys: ['name']
    }

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setInput(searchTerm);
        setCurrentPage(1); // reset to page 1 on new search

        if (searchTerm.trim() === '') {
            setSearchValues(data);
        } else {
            const fuse = new Fuse(data, options);
            const result = fuse.search(searchTerm).map(result => result.item);
            setSearchValues(result);
        }
    };

    return (
        <div className="form-comp-main">
            <div class="search-wrapper">
                <span class="search-icon">🔍</span>
                <input
                    type="search"
                    placeholder="Search by name"
                    class="search-input"
                    value={input}
                    onChange={handleSearch}
                />
            </div>
            <table class="table-list">
                <thead>
                    <tr>
                        <th className='name'>Name</th>
                        <th className='email'>Email Id</th>
                        <th className='contact'>Contact No</th>
                        <th className='message'>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paginatedItems.map((itemPerPage, i) => {
                            return (
                                <tr key={i}>
                                    <td className='name'>{itemPerPage.name}</td>
                                    <td className='email'>john@example.com</td>
                                    <td className='contact'>+91 9876543210</td>
                                    <td className='message'>
                                        <span>
                                            Hel  , this is John! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, soluta?
                                            Hello, this is John! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, soluta?
                                            Hello, this is John! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, soluta?
                                        </span>
                                    </td>
                                </tr>

                            )
                        })
                    }

                </tbody>
            </table>
            <div className="btn-main">
                <button
                    onClick={() => setCurrentPage(p => p - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>

                <div className="pageNumBtn">
                    {/* Always show current page */}
                    <button onClick={() => setCurrentPage(currentPage)}>
                        {currentPage}
                    </button>

                    {/* Show currentPage + 1 if it's within totalPage */}
                    {currentPage + 1 <= totalPage && (
                        <button onClick={() => setCurrentPage(currentPage + 1)}>
                            {currentPage + 1}
                        </button>
                    )}

                    {/* Show currentPage + 2 if it's within totalPage */}
                    {currentPage + 2 <= totalPage && (
                        <button onClick={() => setCurrentPage(currentPage + 2)}>
                            {currentPage + 2}
                        </button>
                    )}

                    {/* Ellipsis and last page if more pages exist */}
                    {currentPage + 2 < totalPage && (
                        <>
                            <span>...</span>
                            <button onClick={() => setCurrentPage(totalPage)}>{totalPage}</button>
                        </>
                    )}
                </div>

                <button
                    onClick={() => setCurrentPage(p => p + 1)}
                    disabled={currentPage >= totalPage - 2}
                >
                    Next
                </button>
            </div>

        </div>



    )
}

const data = Array.from({ length: 50 }, (_, i) => {
    return {
        name: `John Doe${i + 1}`
    }
})
