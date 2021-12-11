import React, {memo} from 'react'
import Loader from 'react-loader-spinner'

const Loaders = () => {
    return (
        <div className='container'>
            <Loader
                type="Rings"
                color="#ccc"
                height={100}
                width={100}
            />
        </div>
    )
}

export default memo(Loaders)
