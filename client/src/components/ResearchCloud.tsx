import React, { useEffect, useState } from 'react';

interface ResearchInterest {
    name: string;
    percentage: number;
}

interface ResearchCloudProps {
    interests: ResearchInterest[];
}

const ResearchCloud: React.FC<ResearchCloudProps> = ({ interests }) => {
    const minSize = 80;
    const maxSize = 200;
    const [positions, setPositions] = useState<{ x: number; y: number; size: number }[]>([]);

    const colors = [
        'bg-blue-400', 'bg-green-400', 'bg-red-400', 'bg-yellow-400', 'bg-purple-400',
        'bg-pink-400', 'bg-indigo-400', 'bg-teal-400', 'bg-orange-400', 'bg-cyan-400',
        'bg-lime-400', 'bg-emerald-400', 'bg-violet-400', 'bg-fuchsia-400', 'bg-rose-400'
    ];

    const maxPercentage = Math.max(...interests.map(i => i.percentage));

    useEffect(() => {
        const calculatePositions = () => {
            const newPositions: { x: number; y: number; size: number }[] = [];
            const centerX = 0;
            const centerY = 0;
            const radius = 300; // Adjust this value to change the overall spread

            interests.forEach((interest) => {
                const size = minSize + (maxSize - minSize) * (interest.percentage / maxPercentage);
                let x, y, overlapping;
                let attempts = 0;
                const maxAttempts = 100;

                do {
                    overlapping = false;
                    const angle = Math.random() * 2 * Math.PI;
                    const distance = radius * (0.5 + Math.random() * 0.5);
                    x = centerX + Math.cos(angle) * distance;
                    y = centerY + Math.sin(angle) * distance;

                    // Check for overlaps with existing positions
                    for (const pos of newPositions) {
                        const dx = x - pos.x;
                        const dy = y - pos.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < (size / 2 + pos.size / 2)) {
                            overlapping = true;
                            break;
                        }
                    }

                    attempts++;
                } while (overlapping && attempts < maxAttempts);

                if (!overlapping) {
                    newPositions.push({ x, y, size });
                }
            });

            setPositions(newPositions);
        };

        calculatePositions();
    }, [interests, maxPercentage]);

    return (
        <div className="relative w-full h-[600px] sm:h-[700px] md:h-[700px]">
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                {positions.map((pos, index) => (
                    <line
                        key={`line-${index}`}
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${pos.x}px)`}
                        y2={`calc(50% + ${pos.y}px)`}
                        stroke="#CBD5E0"
                        strokeWidth="1"
                    />
                ))}
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold z-10 shadow-lg">
                SMART LAB
            </div>
            {interests.map((interest, index) => (
                <div
                    key={interest.name}
                    className={`absolute rounded-full ${colors[index % colors.length]} flex items-center justify-center text-white text-center p-2 sm:p-3 md:p-4 shadow-lg transition-all duration-300 hover:scale-105 hover:z-20`}
                    style={{
                        width: `${positions[index]?.size}px`,
                        height: `${positions[index]?.size}px`,
                        left: `calc(50% + ${positions[index]?.x}px - ${positions[index]?.size / 2}px)`,
                        top: `calc(50% + ${positions[index]?.y}px - ${positions[index]?.size / 2}px)`,
                        fontSize: `${Math.max(12, positions[index]?.size / 12)}px`,
                        zIndex: 5,
                    }}
                >
                    <div className="font-semibold">{interest.name}</div>
                </div>
            ))}
        </div>
    );
};

export default ResearchCloud;