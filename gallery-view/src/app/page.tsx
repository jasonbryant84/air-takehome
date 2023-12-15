import { GalleryWrapper, GalleryControls, GalleryHeader } from '@/components/gallery'
import { Header, StoreProvider } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-col">
      <StoreProvider>
        <Header />
      </StoreProvider>

      <GalleryHeader
        title='Air Branded Boards'
        subTitle='With a bunch of stock photos!'
      />
      <GalleryControls />
      
      <StoreProvider>
        <GalleryWrapper
          type='boards'
        />

        <GalleryWrapper
          type='assets'
        />
      </StoreProvider>
    </main>
  )
}