import React from 'react'
import { Loader } from '@components/Figure/Loader/Loader'
import {
	FigureContainer,
	Image,
	ImageContainer,
} from './styles'
import { Figcaption } from './styles'
import { Icon } from '@components/Figure/Icon/Icon'

export type FigureProps = {
	children?: React.ReactNode,
	src: string,
	arWidth?: number,
	arHeight?: number,
}

export const Figure: React.FC<FigureProps> = ({
	children,
	src,
	arWidth = 9,
	arHeight = 16,
}: FigureProps) => {
	const onLoading = (ev: React.SyntheticEvent<HTMLImageElement>) => {
		setLoading(false)
	}

	const onError = (ev: React.SyntheticEvent<HTMLImageElement>) => {
		setLoading(false)
		setError(true)
	}

	const [loading, setLoading] = React.useState<boolean>(true)
	const [error, setError] = React.useState<boolean>(false)

	return (
		<>
			<FigureContainer>
				<ImageContainer arHeight={arHeight} arWidth={arWidth}>
					{loading && <Loader />}
					<Image
						isNone={loading || error}
						src={src}
						alt={'Загрузка'}
						onLoad={onLoading}
						onError={onError}
					/>
					{error && <Icon />}
				</ImageContainer>
			</FigureContainer>
			<Figcaption>{children}</Figcaption>
		</>
	)
}
