import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';

/**
 * MiniProfile component
 * @param {boolean} open opens
 * @return {React.ReactElement} JSX component
 */
export default function MiniProfile({ open }) {
    const avatarMinimumSize = 40;
    const avatarMaximumSize = 60;
    const user = {
        name: 'Isaac Daniel Reyna',
        avatar: '/profile-avatar.jpeg',
        backgroundImage: '/profile-background.jpeg',
        occupation: 'Software Engineer',
    };

    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${user.backgroundImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'opacity 0.15s',
                }}
                style={{
                    opacity: open ? 1 : 0,
                }}
            />

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    paddingBottom: '10px',
                }}
            >
                <Avatar
                    alt={user.anem}
                    src={user.avatar}
                    sx={{
                        boxShadow: '0 2px 5px 2px black',
                        marginTop: '-30px',
                        marginBottom: '10px',
                        transition: 'all 0.15s',
                    }}
                    style={{
                        height: open ? avatarMaximumSize : avatarMinimumSize,
                        width: open ? avatarMaximumSize : avatarMinimumSize,
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        transition: 'all 0.15s',
                    }}
                    style={{
                        opacity: open ? 1 : 0,
                        height: open ? 'auto' : 0,
                    }}
                >
                    <Box sx={{ fontWeight: 'bold' }}>{user.name}</Box>
                    <Box>{user.occupation}</Box>
                </Box>
            </Box>
            <Divider
                variant="middle"
                sx={{ borderColor: '#ffffff1a' }}
                style={{ borderBottomWidth: open ? 'thin' : 0 }}
            />
        </Box>
    );
}
MiniProfile.defaultProps = {
    open: true,
};

MiniProfile.propTypes = {
    open: PropTypes.bool.isRequired,
};
