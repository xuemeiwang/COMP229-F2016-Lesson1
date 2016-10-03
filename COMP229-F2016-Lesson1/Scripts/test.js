No. 6
select * from crimes where crime_id in (
select crime_id from crime_charges
where fine_amount > 
(select AVG(fine_amount) from crime_charges)
and
amount_paid < (select AVG(amount_paid) from crime_charges));


No. 7
--new solution
select last, first
from criminals join crimes using (criminal_id)
where crime_id = 10089;


--old solution
select last, first
from criminals
where criminal_id in
(select criminal_id from crimes where crime_id = 10089);



No. 8
select * from criminals
where criminal_id in (select distinct criminal_id from sentences
where type = 'P' and start_date is not null
and end_date is not null);
