
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
const usGetBoards = () => {
    return useAppSelector((state) => state.boards.items)
}
const usGetAssets = () => {
    return useAppSelector((state) => state.assets.items)
}

export const useCreateThumbnails = (isBoards: boolean) => {
    let thumbnails
    const thumbnailObjs = isBoards ? usGetBoards() : usGetAssets()

    if(isBoards) {
        thumbnails = thumbnailObjs?.map((obj) => {
            return {
                id: obj.id,
                url: obj.thumbnails?.length ? obj.thumbnails[0] : null
            }
        })
    } else { // is assets
        thumbnails = thumbnailObjs?.map((obj) => {
            return {
                id: obj.id,
                url: obj.assets.image
            }
        })
    }

    return thumbnails
}