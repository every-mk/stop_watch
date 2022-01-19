$(document).ready(function()
{
  const TIM_IT_TIME = 1000;
  
  let it_id = null;
  
  $("#start_timer").mouseup(function()
  {
    if (it_id == null)
    {
      it_id = setInterval(interrupt_request, TIM_IT_TIME);
    
      set_control_disable("#start_timer");
      set_control_enable("#stop_timer");
      set_control_enable("#reset_timer"); 
    }
  });
  
  $("#stop_timer").mouseup(function()
  {
    if (it_id != null)
    {
      clearInterval(it_id);
      it_id = null;
      
      set_control_enable("#start_timer");
      set_control_disable("#stop_timer");
      set_control_enable("#reset_timer"); 
    }
  });
  
  $("#reset_timer").mouseup(function()
  {
    if (it_id != null)
    {
      clearInterval(it_id);
      it_id = null;
      
      set_seconds(0);
      
      set_control_enable("#start_timer");
      set_control_disable("#stop_timer");
      set_control_disable("#reset_timer");
    }
  });
  
  function set_control_enable(select_id)
  {
    $(select_id).addClass("control_enable");
    $(select_id).removeClass("control_disable");
  }
  
  function set_control_disable(select_id)
  {
    $(select_id).addClass("control_disable");
    $(select_id).removeClass("control_enable");
  }
  
  function interrupt_request()
  {
    let total_seconds = get_seconds();
    total_seconds++;
    
    set_seconds(total_seconds);
  }
  
  function get_seconds()
  {
    let seconds = $(".watch_time span:nth-child(1)").text();
    seconds += $(".watch_time span:nth-child(2)").text();
    seconds += $(".watch_time span:nth-child(3)").text();
    seconds += $(".watch_time span:nth-child(4)").text();
    
    return Number(seconds);
  }
  
  function set_seconds(seconds)
  {
    let str_seconds = String(seconds);
    let disits = [0, 0, 0, 0];
    let off_set = disits.length - str_seconds.length;
    
    if (off_set >= 0)
    {
      for (let i = 0; i < str_seconds.length; i++)
      {
        disits[off_set + i] = str_seconds.split('')[i];
      } 
    }
    
    $(".watch_time span:nth-child(1)").text(disits[0]);
    $(".watch_time span:nth-child(2)").text(disits[1]);
    $(".watch_time span:nth-child(3)").text(disits[2]);
    $(".watch_time span:nth-child(4)").text(disits[3]);
  }
});