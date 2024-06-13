import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-white py-4">
            <div className="container mx-auto flex justify-between items-center px-8 pt-20 pb-4">
                <div className="flex items-center space-x-4">
                    <img src="/assets/images/logo.jpeg" alt="GoTiger" className="h-8 md:max-w-20" />
                </div>
                <div className="flex items-center space-x-4">
                    <img src="/assets/images/apple.png" alt="GoTiger" className="h-8 md:max-w-20" />
                    <img src="/assets/images/playStore.png" alt="GoTiger" className="h-8 md:max-w-20" />
                </div>
            </div>
            <div className='border-t border-gray-200 flex justify-between px-8 py-6'>
                <div></div>
                <div className="flex space-x-10">
                    <span className="text-gray-500">© 2022 GoTiger GmbH</span>
                    <a href="#" className="text-gray-500">Imprint</a>
                    <a href="#" className="text-gray-500">Privacy Policy</a>
                    <a href="#" className="text-gray-500">Terms and Conditions</a>
                </div>
                <div className="flex space-x-4 items-center">
                    <div className="relative">
                        <select className="text-gray-500 bg-gray-100 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:border-blue-300">
                            <option>Deutsch</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
