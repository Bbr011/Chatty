import { React, useState, useEffect} from 'react'
import toast from 'react-hot-toast'

const Getconvos = () => {
    const [loading, setLoading] = useState(false);
    const [convos, setConvos] = useState([]);

    useEffect(() => {
        const fetchConvos = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/users');
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setConvos(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchConvos();
    }, []);
    return { loading, convos };
}

export default Getconvos