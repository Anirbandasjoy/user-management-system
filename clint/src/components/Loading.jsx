import { Oval } from 'react-loader-spinner'
const Loading = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <Oval
                height={70}
                width={70}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}

            />
        </div>
    )
}

export default Loading