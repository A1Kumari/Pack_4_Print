import { ImageBox } from "@/pages/pack/Pack.js";
import Button from "../Button.js";
import { printPages } from "@/utils.js";
import { useAppSelector } from "@/redux/hooks.js";

interface PrintButtonProps {
    boxes: ImageBox[][];
}


const PrintButton = ({ boxes }: PrintButtonProps) => {
    const { container } = useAppSelector((state) => state.main);

    const handlePrint = async () => {
        await printPages({ boxes, container });
    }

    return (
        <Button
            onClick={handlePrint}
            className="bg-purple-500 hover:bg-purple-600"
        >
            Print
        </Button>
    );
};

export default PrintButton;
