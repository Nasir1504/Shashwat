import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';

import UploadFileComp from '../upload-file-comp/UploadFileComp';
import EditFileComp from '../edit-file-comp/EditFileComp';

//styles
import './blog-post.scss';

//icons
import EditIcon from '../../../assets/imgs/dashboard/edit-icon.png';
import DeleteIcon from '../../../assets/imgs/dashboard/delete-icon.png';


export default function BlogPost() {

    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 3;
    const [searchValues, setSearchValues] = useState(data);
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const paginatedItems = searchValues.slice(startIndex, endIndex);
    const totalPage = Math.ceil(searchValues.length / itemPerPage);
    const dialogRef = useRef(null);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [allBlogs, setAllBlogs] = useState(data);
    const [input, setInput] = useState('');


    const toggleDialog = (item) => {
        const dialog = dialogRef.current;
        setSelectedBlog(item)
        if (dialog.open) {
            dialog.close();
        } else {
            dialog.showModal();
        }

    };


    useEffect(() => {
        if (input.trim() === '') {
            setSearchValues(allBlogs);
        }
    }, [input, allBlogs]);

    useEffect(() => {
        const maxPage = Math.ceil(searchValues.length / itemPerPage);
        if (currentPage > maxPage) {
            setCurrentPage(1);
        }
    }, [searchValues]);


    const options = {
        includeScore: true,
        threshold: 0.1,

        keys: ['name']
    }

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setInput(searchTerm);
        setCurrentPage(1);

        if (searchTerm.trim() === '') {
            setSearchValues(allBlogs);
        } else {
            const fuse = new Fuse(allBlogs, options);
            const result = fuse.search(searchTerm).map(r => r.item);
            setSearchValues(result);
        }
    };

    const updateBlog = async (id, formData) => {
        try {
            const response = await fetch(`https://your-api.com/blogs/${id}`, {
                method: 'PUT',
                body: formData, // FormData includes image and description
            });

            if (!response.ok) {
                throw new Error('Failed to update blog');
            }

            const result = await response.json();
            console.log('Blog updated:', result);
            // optionally refetch blogs or update state
        } catch (error) {
            console.error('Error updating blog:', error);
        }
    };

    return (
        <div className="blog-post-main">

            <section className="upload-section">
                <UploadFileComp />
            </section>

            <dialog
                className='dialog-box'
                close
                ref={dialogRef}
            >
                <section className='inner-section'>

                    {/* <p>ID: {blogCardId}</p> */}
                    {selectedBlog && <EditFileComp
                        defaultValues={{
                            imageUrl: selectedBlog.imageUrl,
                            imageName: selectedBlog.imageName,
                            description: selectedBlog.description,
                        }}
                        onSubmit={(formData) => {
                            updateBlog(selectedBlog.id, formData);
                            if (dialogRef.current?.close) dialogRef.current.close();
                        }}
                    />}
                    <form method="dialog" className='dialog-cancel-btn'>
                        <button>&#10005;</button>
                    </form>
                </section>
            </dialog>

            <section className="upload-list">
                <div className="search-wrapper">
                    <span className="search-icon">🔍</span>
                    <input
                        type="search"
                        placeholder="Search by name"
                        className="search-input"
                        value={input}
                        onChange={handleSearch}
                    />

                </div>

                <div className="blog-list">
                    {
                        paginatedItems.map((item) => {
                            return (
                                <div className='blog-card' key={item.id}>
                                    <p>{item.name}</p>
                                    <div className="icon-container">

                                        <span>
                                            <img src={EditIcon} alt=''
                                                onClick={() => { toggleDialog(item) }}
                                            />
                                        </span>
                                        <span>
                                            <img src={DeleteIcon} alt='' />
                                        </span>

                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
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
                        disabled={currentPage === totalPage}
                    >
                        Next
                    </button>
                </div>

            </section>
        </div>
    )
}

const data = Array.from({ length: 50 }, (_, i) => {
    return {
        id: i + 1,
        name: `Blog${i + 1}`,
        description: `This is the description of Blog${i + 1}`,
        imageUrl: 'https://via.placeholder.com/150',
        imageName: `image${i + 1}.jpg`
    }
})


