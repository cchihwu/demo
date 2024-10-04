import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@mui/material';

const MenuComponent: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentTime, setCurrentTime] = useState<string>('');

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // 更新當前時間
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };

    updateTime(); // 初始設置
    const intervalId = setInterval(updateTime, 1000); // 每秒更新

    return () => clearInterval(intervalId); // 清除定時器
  }, []);

  return (
    <AppBar position="fixed" style={{ height: '70px', padding: 0 }}>
      <Toolbar style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="h6" style={{ flexGrow: 1, fontSize: '1.5rem', marginTop: 0 }}>
            デモ アプリ
          </Typography>
          <Button color="inherit" onClick={handleMenuClick}>
            サンプルメニュー ▼
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>List item 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>List item 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>List item 3</MenuItem>
          </Menu>
          <Button color="inherit">項目１</Button>
          <Button color="inherit">項目２</Button>
          <Button color="inherit">項目３</Button>
          <Button color="inherit">項目４</Button>
          <Button color="inherit">項目５</Button>
          <Button color="inherit">ログアウト</Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: '1px' }}>
          <Typography variant="body1" style={{ color: 'white', marginRight: '50px' }}>
            登録使用者：XXX
          </Typography>
          <Typography variant="body1" style={{ color: 'white' }}>
            {currentTime}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MenuComponent;