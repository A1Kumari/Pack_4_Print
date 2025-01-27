import SaveAsPdfButton from "../../../components/actionButtons/SaveAsPDFButton.js";
import { ImageBox } from "../Pack.js";
import { useAppSelector } from "../../../redux/hooks.js";
import ResetButton from "../../../components/actionButtons/ResetButton.js";
import StartPackingButton from "../../../components/actionButtons/StartPackingButton.js";
import ResizeButton from "../../../components/actionButtons/ResizeButton.js";
import StopButton from "../../../components/actionButtons/StopButton.js";
import PrintButton from "@/components/actionButtons/PrintButton.js";


type ActionButtonsProps = {
    setBoxes: React.Dispatch<React.SetStateAction<ImageBox[][]>>;
    boxes: ImageBox[][];
    images: ImageBox[];
    setImages: React.Dispatch<React.SetStateAction<ImageBox[]>>;
    updateScaleFactor: () => void;
};

const ActionButtons = ({
    boxes,
    setBoxes,
    images,
    setImages,
    updateScaleFactor,
}: ActionButtonsProps) => {
    const { inResizeMode, isPacking } = useAppSelector((state) => state.main);
    return (
        <div className="flex flex-wrap justify-center w-full gap-2 py-2 mt-5 mb-5 ">
            {boxes.length > 0 && (
                <>
                    <SaveAsPdfButton boxes={boxes} />
                    <div className="hidden lg:flex">
                        <PrintButton boxes={boxes} />
                    </div>
                    <ResizeButton setBoxes={setBoxes} />
                </>
            )}
            {inResizeMode && images.length > 0 && (
                <StartPackingButton setBoxes={setBoxes} images={images} />
            )}
            {!isPacking && images.length > 0 && (
                <ResetButton
                    setBoxes={setBoxes}
                    setImages={setImages}
                    updateScaleFactor={updateScaleFactor}
                />
            )}
            {isPacking && <StopButton />}
        </div>
    );
};

export default ActionButtons;
