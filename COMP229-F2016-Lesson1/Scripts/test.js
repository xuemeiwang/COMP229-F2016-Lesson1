No. 7
select last, first
from criminals
where criminal_id in
(select criminal_id from crimes where crime_id = 10089);

No. 8
select * from criminals
where criminal_id in (select distinct criminal_id from sentences
where type = 'P' and start_date is not null
and end_date is not null);
