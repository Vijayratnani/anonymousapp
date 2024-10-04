import React, { useState, useEffect } from 'react';

const PublicConcern = () => {
    const [storyPopUp, setStoryPopUp] = useState(false);
    const [resourcesPopUp, setResourcesPopUp] = useState(false);

    const showStory = (e) => {
        e.stopPropagation(); // Prevent backdrop click
        setStoryPopUp(!storyPopUp);
        if (resourcesPopUp) {
            setResourcesPopUp(false); // Close resources if open
        }
    };

    const showResources = (e) => {
        e.stopPropagation(); // Prevent backdrop click
        setResourcesPopUp(!resourcesPopUp);
        if (storyPopUp) {
            setStoryPopUp(false); // Close story if open
        }
    };

    // Reset popup on clicking outside
    const resetPopups = () => {
        setStoryPopUp(false);
        setResourcesPopUp(false);
    };

    // Detect clicks outside the popups
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.popup-content')) {
                resetPopups();
            }
        };

        // Add event listener to detect clicks outside
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="sm:w-full relative ml-0 2xl:ml-96 pb-5 border-l border-neutral-400/80 hover:border-neutral-700">
            <div className="max-w-6xl mx-auto mt-10 px-6">
                <div className='ml-0'>
                    {storyPopUp && (
                        <>
                            <div className='relative'>
                                <div className="fixed inset-0 flex justify-center items-center z-50 px-4 sm:px-6 lg:px-8 popup-content">
                                    <div className="relative w-full max-w-4xl overflow-x-auto h-2/3 shadow-lg transform 
                                        bg-customWhite2 p-6 rounded">
                                        {/* Story content */}
                                    </div>
                                </div>
                                <div className="fixed inset-0 bg-customBlack bg-opacity-55 backdrop-blur-sm z-40" onClick={resetPopups}></div>
                            </div>
                        </>
                    )}
                    {resourcesPopUp && (
                        <div className='relative'>
                            <div className="fixed inset-0 flex justify-center items-center z-50 px-4 sm:px-6 lg:px-8 popup-content">
                                <div className="relative w-full max-w-4xl overflow-x-auto h-2/3 shadow-lg transform 
                                    bg-customWhite2 p-6 rounded">
                                    {/* Resources content */}
                                </div>
                            </div>
                            <div className="fixed inset-0 bg-customBlack bg-opacity-55 backdrop-blur-sm z-40" onClick={resetPopups}></div>
                        </div>popup-content
                    )}
                </div>
                {/* Rest of your content */}
            </div>
        </div>
    );
};

export default PublicConcern;
