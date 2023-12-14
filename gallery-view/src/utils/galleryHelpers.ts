
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { fetchBoards, BoardType } from '@/redux/boardsSlice'

export const createThumbnails = (isBoards: boolean) => {
    let thumbnails
    const thumbnailObjs = isBoards ?
        useAppSelector((state) => state.boards.items) : useAppSelector((state) => state.assets.items)

    if (thumbnailObjs.length === 0) return []

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