import React from 'react'
import {BsFilter} from "react-icons/bs"
import {IoMdAdd} from "react-icons/io"

export const TitileAndSearch = ({ data }) => {
    const { title, searchTerm, handleSearchChange, placeholder, addEditBtn,filterCreteNewBtn } = data
    
    return (
        <>
            <div className='d-flex px-4 py-4 position-fixed w-100 bg-white' style={{zIndex:98}}>
                <h5 className='m-0'>{title}</h5>
                <div className='flex-grow-1 justify-content-center d-flex'>
                    <input type="text" className="form-control w-50 border-dark rounded-0" placeholder={placeholder} onChange={handleSearchChange} value={searchTerm} style={{ outline: 'none', boxShadow: 'none', }} />
                </div>
                {
                    addEditBtn && (
                        <div>
                            <button className='btn btn-success me-3' onClick={addEditBtn.EditBtn}>Edit</button>
                            <button className='btn btn-success' onClick={addEditBtn.AddBtn}>Add new</button>
                        </div>
                    )
                }
                {
                     filterCreteNewBtn && (
                        <div>
                            <button className='btn btn-secondary me-3'>Filter<BsFilter size={20}/></button>
                            <button className='btn btn-secondary' onClick={filterCreteNewBtn.CreateNewBtn} ><IoMdAdd size={20}/> Create New </button>
                        </div>
                    )

                }
            </div>
        </>
    )
}
