// src/App.jsx
import Button from './components/Button.jsx';

export default function App() {
  return (
    <div className="p-6 space-y-3">
      {/* Enabled 상태*/}
      <Button
        className="
        bg-purple6 text-white 
        hover:bg-purple7 active:bg-purple8 
        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple3 
        
        w-auto 
        mobile:w-pu 
        tablet:min-w-[208px]  pc:min-w-[208px] 
        
        mobile:h-12 
        tablet:h-14 pc:h-14"
      >
        Enabled
      </Button>

      {/* Disabled 상태*/}
      <Button
        disabled
        className="
        bg-grayscale3 text-white 
        disabled:cursor-not-allowed
        
        w-auto 
        mobile:w-full 
        tablet:min-w-[208px]  pc:min-w-[208px] 
        
        mobile:h-12 
        tablet:h-14 pc:h-14"
      >
        Disabled
      </Button>

      {/* Hover 상태*/}
      <Button
        className="!bg-purple7 text-white

        w-auto 
        mobile:w-full 
        tablet:min-w-[208px]  pc:min-w-[208px] 
        
        mobile:h-12 
        tablet:h-14 pc:h-14"
      >
        Hover
      </Button>

      {/* Pressed 상태 */}
      <Button
        className="!bg-purple8 text-white 

        w-auto 
        mobile:w-full 
        tablet:min-w-[208px]  pc:min-w-[208px] 
        
        mobile:h-12 
        tablet:h-14 pc:h-14"
      >
        Pressed
      </Button>

      {/* Focus 상태 (항상 링을 보이게) */}
      <Button
        className="
      bg-purple6 text-white ring-2 ring-purple3 gap-2.5 
      
        w-auto 
        mobile:w-full 
        tablet:min-w-[208px]  pc:min-w-[208px] 
        
        mobile:h-12 
        tablet:h-14 pc:h-14"
      >
        Focus
      </Button>
    </div>
  );
}
