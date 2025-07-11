import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

//styles
import './upload-file-comp.scss';

//imgs
import UploadIcon from "../../../assets/imgs/dashboard/uploadIcon.svg";


export default function UploadFileComp() {
    const {
        register,
        handleSubmit,
        resetField,
        reset,
        formState: { errors },
    } = useForm();

    const [imagePreview, setImagePreview] = useState(null);
    const [imageFileName, setImageFileName] = useState('');
    
    const onSubmit = (data) => {
        // console.log('Form Data:', data);

        const formData = new FormData();
        formData.append('image', data.image[0]);
        formData.append('description', data.description);

        // Send formData to backend if needed

        reset();
        setImagePreview(null);
        setImageFileName(null);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            setImageFileName(file.name); // Save the file name

        }
    };


    const handleCancelImage = () => {
        resetField('image');
        setImagePreview(null);
        setImageFileName("");
    };
    return (
        <section className="upload-file-comp-main">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="upload-blog-form"
            >
                {/* Image Input */}
                <div className="file-upload">
                    <label className="block mb-1 font-medium">
                        <span>
                            Upload Image
                        </span>
                        <spna className="imgspan">
                            <img src={UploadIcon} alt="" />
                        </spna>
                    </label>
                    <input
                        className='input-tag'
                        type="file"
                        accept="image/*"
                        {...register('image', { required: 'Image is required' })}
                        onChange={(e) => {
                            handleImageChange(e);
                        }}
                    />
                    {errors.image && (
                        <p className="text-red-500 uploaded-item">{errors.image.message}</p>
                    )}
                    {imagePreview && (
                        <div className="img-preview-sec">
                            <p className="text-sm text-red-600 mt-1">File: {imageFileName}</p>

                            <button
                                className="cancel-btn text-red-600"
                                type="button"
                                onClick={handleCancelImage}
                            >
                                <span>
                                    &#10005;
                                </span>

                            </button>
                        </div>
                    )}
                </div>

                {/* Text Area */}
                <div className="text-area-sec">
                    <textarea
                        rows={4}
                        className="w-full border rounded p-2 text-input"
                        placeholder='Enter Blog Content'
                        {...register('description', { required: 'Description is required' })}
                    />
                    {errors.description && (
                        <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 upload-btn"
                >
                    Upload
                </button>
            </form>
        </section>
    )
}
