import React, { useState } from 'react';
import { Box } from '@mui/material';
import TemperatureDropdown from '../common/TemperatureDropdown';
import SalesDesCdDropdown from '../common/SalesDesCdDropdown';
import MessageTypography from '../common/MessageTypography';
import ItemTypography from '../common/ItemTypography';
import TimeRageTypography from '../common/TimeRageTypography';
import { SelectChangeEvent } from '@mui/material/Select';

interface TopSectionProps {
  showView: boolean;
}

const TopSection: React.FC<TopSectionProps> = ({ showView = false }) => {
  const [temperature, setTemperature] = useState<string>('');

  const handleTemperatureChange = (event: SelectChangeEvent<string>) => {
    console.log(event.target.value);
    setTemperature(event.target.value as string);
  };
  
  return (
    <Box sx={{ backgroundColor: '#e0e0e0', flex: 2, marginBottom: '5px', padding: '10px' }}>
         <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
            <TemperatureDropdown itemName="溫度帯区分" onChange={handleTemperatureChange} />
            {temperature && (
              <>
                <SalesDesCdDropdown itemName="売上先CD" />
              </>
            )}
            {showView && (
              <>
                <MessageTypography context="XXXXXX株式会社"/>
                <MessageTypography width="260px" context="XXX-XXX-XXXX" />
                <ItemTypography itemName="受注No." itemValue="　" nameFlex={2} valueFlex={1} />
              </>
            )}
        </Box>
        {showView && (
              <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                  <ItemTypography itemName="納品日" itemValue="2024/09/18" nameFlex={2} valueFlex={1} />
                  <ItemTypography itemName="出荷日" itemValue="2024/09/17" nameFlex={2} valueFlex={1} />
                  <MessageTypography context="XXX県XXX市XXX町XXX番地XX-XX XXXXビル XX階" />
                  <ItemTypography itemName="納品先区分" itemValue="一般受注" nameFlex={2} valueFlex={1} />
                  <ItemTypography itemName="客先伝票番号" itemValue="　" nameFlex={2} valueFlex={1} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                  <ItemTypography itemName="オーダーNo." itemValue="未" nameFlex={2} valueFlex={1} />
                  <ItemTypography itemName="専伝No." itemValue="未" nameFlex={2} valueFlex={1} />
                  <ItemTypography itemName="受注データ区分" itemValue="受注情報" nameFlex={2} valueFlex={1} />
                  <ItemTypography itemName="入力状態区分" itemValue="初期登録" nameFlex={2} valueFlex={1} />
                  <ItemTypography itemName="早出/取引" itemValue="　" nameFlex={2} valueFlex={1} />
                  <ItemTypography itemName="早出/取引備考" itemValue="　" nameFlex={2} valueFlex={1} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                  <ItemTypography itemName="OnesLOG連携" itemValue="未" nameFlex={2} valueFlex={1} />
                  <ItemTypography itemName="SAP連携" itemValue="未" nameFlex={2} valueFlex={1} />
                  <ItemTypography itemName="出荷指示" itemValue="未" nameFlex={2} valueFlex={1} />
                  <ItemTypography itemName="WMS出庫" itemValue="未" nameFlex={2} valueFlex={1} />
                  <ItemTypography itemName="DWH連携" itemValue="未" nameFlex={2} valueFlex={1} />
                  <ItemTypography itemName="取引場所" itemValue="XXXX" nameFlex={2} valueFlex={1} />
                  <TimeRageTypography itemName="指定時間" FromTime="10:00" ToTime="11:00" />
              </Box>
              </>
            )}
    </Box>
  );
};

export default TopSection;