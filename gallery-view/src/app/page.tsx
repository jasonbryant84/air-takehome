import { Gallery, GalleryControls, GalleryHeader } from '@/components/gallery'
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
        <Gallery
          type='boards'
        />

        <Gallery
          type='assets'
        />
      </StoreProvider>
    </main>
  )
}