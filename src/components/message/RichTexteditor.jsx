import AlignLeft from '../../assets/icon/ic_Alignment.svg';
import AlignCenter from '../../assets/icon/ic_Center_Alignment.svg';
import AlignRight from '../../assets/icon/ic_Right_Alignment.svg';
import Bullet from '../../assets/icon/ic_Bullet.svg';
import NumBullet from '../../assets/icon/ic_Num_Bullet.svg';
import FontB from '../../assets/icon/ic_font_style_B.svg';
import FontI from '../../assets/icon/ic_font_style_I.svg';
import FontU from '../../assets/icon/ic_font_style_U.svg';
import FontColor from '../../assets/icon/ic_font_color.svg';
import FontT from '../../assets/icon/ic_font_style_T.svg';

export default function RichTexteditor({
  text = 'I am your reach text editor.',
  className = '',
}) {
  // 정확한 사이즈
  const ICON_24 = 'w-6 h-6'; // 24x24
  const ITEM_24 =
    'w-6 h-6 flex items-center justify-center select-none cursor-default';

  const ToolItem = ({ children }) => (
    <div className={ITEM_24} aria-hidden="true">
      {children}
    </div>
  );

  return (
    <div className={`w-full max-w-[820px] ${className}`}>
      {/* Toolbar: 모든 아이템 간격 14px */}
      <div className="flex items-center gap-[14px] p-2 bg-grayscale1 border border-grayscale3 rounded-t-[12px]">
        {/* Font styles */}
        <ToolItem>
          <img src={FontB} alt="" className={ICON_24} />
        </ToolItem>
        <ToolItem>
          <img src={FontI} alt="" className={ICON_24} />
        </ToolItem>
        <ToolItem>
          <img src={FontU} alt="" className={ICON_24} />
        </ToolItem>

        {/* Align */}
        <ToolItem>
          <img src={AlignLeft} alt="" className={ICON_24} />
        </ToolItem>
        <ToolItem>
          <img src={AlignCenter} alt="" className={ICON_24} />
        </ToolItem>
        <ToolItem>
          <img src={AlignRight} alt="" className={ICON_24} />
        </ToolItem>

        {/* Lists & color / size */}
        <ToolItem>
          <img src={Bullet} alt="" className={ICON_24} />
        </ToolItem>
        <ToolItem>
          <img src={NumBullet} alt="" className={ICON_24} />
        </ToolItem>
        <ToolItem>
          <img src={FontColor} alt="" className={ICON_24} />
        </ToolItem>
        <ToolItem>
          <img src={FontT} alt="" className={ICON_24} />
        </ToolItem>
      </div>

      {/* Editor area (display only) */}
      <div className="min-h-[200px] p-4 border-x border-b border-grayscale3 rounded-b-[12px] bg-white">
        <p className="text-black">{text}</p>
      </div>
    </div>
  );
}
