
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { fetchBoards, BoardType } from '@/redux/boardsSlice'

export const useCreateThumbnails = (isBoards: boolean) => {
    let thumbnails
    const thumbnailObjs = useAppSelector((state) => isBoards ? state.boards.items : state.assets.items)

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