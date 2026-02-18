import VideoCard from '../../components/video';

const Home = () => {
    const videos = [
        {
            id: "yhQjnDClhKA",
            src: "https://img.youtube.com", 
            title: "The Great White's Breach",
            description: "Witness the raw power of a Great White shark hunting off the coast of South Africa."
        },
        {
            id: "fMxZyTJtYFM",
            src: "https://img.youtube.com",
            title: "Bioluminescent Night Tides",
            description: "A mesmerizing display of neon blue waves caused by glowing phytoplankton."
        },
        {
            id: "X6jj-3adTCE",
            src: "https://img.youtube.com",
            title: "Master of Disguise",
            description: "Watch a Mimic Octopus seamlessly blend into its coral reef environment."
        }
    ];

    const handleClick = (id: string) => {
        window.open(`https://www.youtube.com/${id}`, '_blank');
    };

    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "row", 
            gap: "20px", 
            flexWrap: "wrap",
            padding: "20px",
            justifyContent: "center" 
        }}>
            {videos.map((v) => (
                <VideoCard 
                    key={v.id}
                    src={v.src}
                    title={v.title}
                    description={v.description}
                    id={v.id}
                    onClick={handleClick}
                />
            ))}
        </div>
    );
};

export default Home;
/*
+---------+
|         |
+---------+
 */