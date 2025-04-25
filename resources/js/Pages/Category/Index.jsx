import Info from '@/Components/Info';
import SecondaryButton from '@/Components/SecondaryButton';
import Success from '@/Components/Success';
import TextInput from '@/Components/TextInput';
import Error from '@/Components/Error';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link} from '@inertiajs/react';
import React from 'react'
import DangerButton from '@/Components/DangerButton';
import useFilterForm from '@/hooks/Index';

function Index({ categories, flash }) {

    const {
        data,
        changeHandler,
        resetFilters,
        handleDelete,
        status
    } = useFilterForm(
        {
            "search": null,
        },
        'categories.index'
    );



    return (
        <AuthenticatedLayout
            // header={
            //     <h2 className="text-xl font-semibold leading-tight text-gray-800">
            //         <i class="fa-solid fa-list"></i> <span>Category</span>
            //     </h2>
            // }
        >
            <Head title="Category" />

            <main className="flex-1 p-6 mt-4 mr-4 mb-4 bg-[#fbfbfb] rounded-lg overflow-auto">
                <h1 className="text-2xl font-semibold mb-4">Main Content</h1>
                <p>Welcome to the main section! Place your components and content here.</p>
            
                <div className="py-12">
                    <div className="mx-auto max-w-10xl sm:px-12 lg:px-8">
                        <Link href={route('categories.create')}>

                            <SecondaryButton className='px-4 py-3 my-4 bg-green-500 hover:bg-green-700'><i className="fas fa-plus-circle mr-2"></i> Add Category</SecondaryButton>

                        </Link>
                        {flash.success && (<Success flash={flash} />)}
                        {flash.error && (<Error flash={flash} />)}
                        {flash.info && (<Info flash={flash} />)}
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">

                            <div className="p-6 text-gray-900 my-3 flex gap-4 items-center">

                                <TextInput
                                    type="text"
                                    name='search'
                                    value={data.search}
                                    onChange={changeHandler}
                                    className=" mt-6 block w-full"
                                    placeholder="Search categories..."
                                />
                                <div className={`mt-6`} hidden={status()}>
                                    <button onClick={resetFilters}>
                                        <DangerButton>X</DangerButton>

                                    </button>
                                </div>

                            </div>

                            <div className="p-6 text-gray-900 ">
                                {categories?.data?.length > 0 && (<table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom Du Category</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {categories.data.map((category) => (
                                            <tr key={category.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">{category.id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{category.nom_cat}</td>
                                                <td className="px-6 py-4 whitespace-nowrap space-x-2 gap-3 flex">
                                                    <form onSubmit={(e) => handleDelete(e,category.id)} >
                                                        <button type='submit'  className="text-red-600 hover:text-red-900 p-2 hover:bg-red-100 rounded-full transition duration-150">
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </form>

                                                    <Link
                                                        className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-100 rounded-full transition duration-150"
                                                        href={route('categories.edit', category.id)}
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </Link>
                                                    <Link
                                                        className="text-green-600 hover:text-green-900 p-2 hover:bg-green-100 rounded-full transition duration-150"
                                                        href={route('categories.show', category.id)}
                                                    >
                                                        <i className="fas fa-eye"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>)}
                                {categories.data.length > 0 ? (<div className="mt-4 flex items-center justify-center">
                                    {categories.links.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.url}
                                            className={`px-3 py-2 mx-1 text-sm font-medium rounded-md ${link.active
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-white text-gray-700 hover:bg-gray-50'
                                                } ${!link.url && 'opacity-50 cursor-not-allowed'}`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    ))}
                                </div>) : (<div className="text-center">
                                    <h1 className="text-red-500 text-xl "> <i className="fa fa-circle-exclamation mx-2"></i>pas du resultas</h1>
                                </div>)}


                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    )
}

export default Index
