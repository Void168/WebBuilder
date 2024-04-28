import BlurPage from '@/components/global/blur-page'
import MediaComponent from '@/components/media'
import { getMedia } from '@/libs/queries'
import React from 'react'

type Props = {
    params: {
        subaccountId: string
    }
}

const MediaPage = async ({params}: Props) => {

  const data = await getMedia(params.subaccountId)
  return (
    <div>
        <BlurPage>
            <MediaComponent data={data} subaccountId={params.subaccountId}/>
        </BlurPage>
    </div>
  )
}

export default MediaPage