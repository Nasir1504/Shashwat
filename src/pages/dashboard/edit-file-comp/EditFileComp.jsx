import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


//styles
import "./edit-file-comp.scss";

//icons
import EditIcon from '../../../assets/imgs/dashboard/edit-icon.png';


export default function EditFileComp({ defaultValues = {}, onSubmit: onSubmitProp }) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const [imagePreview, setImagePreview] = useState(null);
    const [imageFileName, setImageFileName] = useState('');

    useEffect(() => {
        if (defaultValues.description) {
            setValue('description', defaultValues.description);
        }

        if (defaultValues.imageUrl) {
            setImagePreview(defaultValues.imageUrl);
            setImageFileName(defaultValues.imageName || 'Existing Image');
        }
    }, [defaultValues, setValue]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            setImageFileName(file.name);
        }
    };

    const onSubmit = (data) => {
        const formData = new FormData();

        if (data.image && data.image[0]) {
            formData.append('image', data.image[0]);
        }

        formData.append('description', data.description);

        if (typeof onSubmitProp === 'function') {
            onSubmitProp(formData); // pass formData to parent
        }
    };

    return (
        <section className="edit-file-comp-main">
            <form onSubmit={handleSubmit(onSubmit)} className="edit-blog-form">
                {/* Image Input */}
                <div className="file-upload">

                    <input
                        className='input-tag'
                        type="file"
                        accept="image/*"
                        {...register('image', {
                            onChange: (e) => {
                                handleImageChange(e);
                            }
                        })}
                    />

                    <span>
                        <img src={EditIcon} alt='' />
                    </span>
                    {errors.image && (
                        <p className="text-red-500 uploaded-item">{errors.image.message}</p>
                    )}
                    {imagePreview && (
                        <div className="img-preview-sec">
                            <img src={imagePreview} alt='' />
                        </div>
                    )}
                </div>

                {/* Text Area */}
                <div className="text-area-sec">
                    <textarea
                        rows={4}
                        className="w-full border rounded p-2 text-input"
                        placeholder="Enter Blog Content"
                        defaultValue={defaultValues.description}
                        {...register('description', { required: 'Description is required' })}
                    />

                    {errors.description && (
                        <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 edit-btn"
                >
                    Save Changes
                </button>
            </form>
        </section>
    )
}
