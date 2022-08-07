import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";

export default function MiniProfile({open}) {
    const avatarMinimumSize = 40;
    const avatarMaximumSize = 60;
    const user = {
        name: 'Isaac Daniel Reyna',
        avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQFnJW9Isrr8MQ/profile-displayphoto-shrink_800_800/0/1554957748437?e=1665619200&v=beta&t=w27J8kOK-S2jbwVigNBTpa3B6Xi6PAf2W3_YBHCIeM4',
        backgroundImage: 'https://media-exp1.licdn.com/dms/image/C5616AQH9AAkvjl4AyQ/profile-displaybackgroundimage-shrink_200_800/0/1659168221186?e=1665619200&v=beta&t=GgwJZWXpjMnRofHc7JIinLOK45v0KzvydjJ2DL1waq8',
        occupation: 'Software Engineer',
    }
    return (
        <>
            <Box sx={{
                    backgroundImage: `url(${user.backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '60px',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: 'opacity 0.15s',
            }}
                style={{
                    opacity: open ? 1 : 0,
                }}
            />

            <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'column',
                    paddingBottom: '10px',
            }}>
                <Avatar
                    alt={user.anem}
                    src={user.avatar}
                    sx={{
                        boxShadow: '0 2px 5px 2px black',
                        marginTop: '-30px',
                        marginBottom: '10px',
                        transition: 'all 0.15s'
                    }}

                    style={{ height: open ? avatarMaximumSize : avatarMinimumSize, width: open ? avatarMaximumSize : avatarMinimumSize }}
                />
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: 'column',
                        transition: 'all 0.15s'
                    }}
                    style={{
                        opacity: open ? 1 : 0,
                        height: open ? 'auto' : 0,
                    }}>
                        <Box sx={{ fontWeight: 'bold' }}>{user.name}</Box>
                        <Box>{user.occupation}</Box>
                    </Box>
            </Box>
            <Divider variant="middle" sx={{ borderColor: '#ffffff1a' }} style={{ borderBottomWidth: open ? 'thin' : 0, }}/>
        </>
    );
}