import { ImageBox } from "@/pages/pack/Pack.js";
import { ContainerType } from "@/redux/features/slices/mainSlice.js";

export type AlgorithmProps = {
    images: ImageBox[];
    container: ContainerType;
};
