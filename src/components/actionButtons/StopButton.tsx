import Button from '../Button.js';
import { terminateWorkerInstance } from '../../workerUtils.js';
import { useAppDispatch } from '../../redux/hooks.js';
import { setInResizeMode, setIsPacking, setPackingProgress } from '../../redux/features/slices/mainSlice.js';

const StopButton = () => {
    const dispatch = useAppDispatch();
    return (
        <Button
            onClick={() => {
                console.log("terminating worker");
                terminateWorkerInstance();
                dispatch(setIsPacking(false));
                dispatch(setInResizeMode(true));
                dispatch(setPackingProgress(0));
            }}
            className="px-2 py-0 mx-auto -mt-5 text-sm text-black underline bg-transparent hover:bg-transparent hover:text-red-500 "
        >
            Stop packing
        </Button>
    )
}

export default StopButton