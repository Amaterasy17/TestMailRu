import {createUseStyles} from "react-jss";

const stylePhoto = createUseStyles({
    maxHeight: {
        height: '100%',
        objectFit: 'cover',
    }
});

export const resizingPhoto = (image: HTMLImageElement, arWidth: number, arHeight: number) => {
    const imageWidth: number = image.width;
    //image.getAttribute('value');
    // const imageSource = new ImageData(image.getAttribute('value'));
    let imageHeight: number = image.height;

    console.log(imageWidth, imageHeight);

    const containerHeight: number = 215;

    // const photo = stylePhoto();
    let futureHeight: number = imageWidth * arHeight / arWidth;

    if (futureHeight >= imageHeight) {
        // image.classList.add(photo.maxHeight);
    }

    if (futureHeight < containerHeight) {
        image.height = Math.ceil(futureHeight);
    }
};

