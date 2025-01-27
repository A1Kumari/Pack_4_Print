import { createRef, useEffect, useRef, useState } from 'react'
import FileDropArea from '../../components/FileDropArea.js'
import { ImageBox } from '../pack/Pack.js';
import SettingsPanel from '../../components/SettingsPanel.js';
import { useAppDispatch, useAppSelector } from '@/redux/hooks.js';
import FreeFormWindow from './components/FreeFormWindow.js';
import { useScaleFactor } from '@/hooks/useScaleFactor.js';
import ActionButtons from '../pack/components/ActionButtons.js';
import { setImagesLoaded } from '@/redux/features/slices/mainSlice.js';
import FreeFormActionButtons from './components/FreeFormActionButtons.js';
import Page from '@/components/Page.js';

const FreeForm = () => {
    const dispatch = useAppDispatch();
    const { inResizeMode, container } = useAppSelector((state) => state.main);
    const [boxes, setBoxes] = useState<ImageBox[][]>([]);
    const [images, setImages] = useState<ImageBox[]>([]);
    const containerWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!boxes || boxes.length === 0) return;

        let loadedCount = 0;
        const totalImages = images.length;

        boxes.forEach((boxSet) => {
            boxSet.forEach((box) => {
                if (!box.file) return;
                const img = new window.Image();
                img.onload = () => {
                    box.imageElement = img;
                    loadedCount++;
                    if (loadedCount === totalImages) {
                        dispatch(setImagesLoaded(true));
                    }
                };

                img.src = URL.createObjectURL(box.file);
            });
        });
    }, [boxes, images]);

    const updateScaleFactor = useScaleFactor(containerWrapper);
    console.log('images', images)


    return (
        <div className="flex flex-col px-2 py-10 sm:px-10">
            <div className="flex flex-col items-center justify-center mt-5 text-center">
                <h1 className="mb-2 text-xl font-bold text-secondary-900 sm:text-2xl">
                    FreeForm Mode
                </h1>
                <p className="sm:text-lg">Freely arrange the images on the paper for printing</p>
                {boxes.length === 0 &&

                    <FileDropArea
                        images={images}
                        setImages={setImages}
                    />
                }
                <SettingsPanel freeform />

                <FreeFormActionButtons
                    boxes={boxes}
                    setBoxes={setBoxes}
                    images={images}
                    setImages={setImages}
                    updateScaleFactor={updateScaleFactor}
                />

                {inResizeMode && images?.length > 0 && (
                    <FreeFormWindow setImages={setImages} images={images} />
                )}
                <div
                    ref={containerWrapper}
                    className="flex flex-wrap w-full items-center justify-center mx-auto max-w-[1050px] gap-y-10 gap-x-5"
                    style={{ overscrollBehavior: "auto" }}
                >
                    {boxes.map((boxSet, index) => (
                        <Page key={index} boxSet={boxSet} index={index} />
                    ))}
                </div>



            </div>
            {/* dont remove */}
            <div id="temp-container" style={{ display: "none" }}></div>
        </div>
    )
}

export default FreeForm