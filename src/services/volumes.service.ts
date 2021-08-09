import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { VolumesApi } from '../api'
import { ApiData, IQueryParams } from '../config/types'
import { Volume } from '../models'

const actions = {
  createMultiple(data: ApiData<Volume>): Volume[] | null {
    if (!data) return null
    return data.items
  },
}

const hooks = {
  useList(params?: IQueryParams | null): [volumes: Volume[] | null, updateVolumes: Function] {
    const [volumes, setVolumes] = useState<Volume[] | null>(null)

    useEffect(() => {
      if(params) updateVolumes(params)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    function updateVolumes(params?: IQueryParams): Promise<Volume[]> {
      return new Promise(async (resolve, reject) => {
        VolumesApi.list(params)
          .then((response: AxiosResponse) => {
            const nextVolumes = actions.createMultiple(response?.data)
            setVolumes(nextVolumes as Volume[])
            resolve(nextVolumes as Volume[])
          })
          .catch(reject)
      })
    }

    return [ volumes, updateVolumes ]
  },
}

export const VolumesService = {
  ...actions,
  ...hooks,
}
