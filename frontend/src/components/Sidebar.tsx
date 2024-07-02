import { Link } from "react-router-dom";
import { Users, Calendar, LayoutGrid, CalendarCheck, HeartPulse } from "lucide-react";

const Sidebar = () => {
  return (
    <div className='hidden border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <div className='flex items-center gap-2 font-semibold'>
            <HeartPulse className='h-6 w-6' />
            <span className=''>Acu Patient</span>
          </div>
        </div>
        <div className='flex-1'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
            <Link
              to='/dashboard'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <LayoutGrid className='h-4 w-4' />
              Dashboard
            </Link>
            <Link
              to='/patients'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <Users className='h-4 w-4' />
              Patients
            </Link>
            <Link
              to='/appointments'
              className='flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary'
            >
              <CalendarCheck className='h-4 w-4' />
              Appointments
            </Link>
            <Link
              to='/calendar'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <Calendar className='h-4 w-4' />
              Calendar
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
