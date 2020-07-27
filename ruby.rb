other_students = "Rob,Marc,Micky,Veronica,Jocelyn".split(",")
puts other_students

other_students.each do |student|
  puts "Super #{student}"
end

age = 23

if age == 18
  puts "You finally can vote!"
elsif age < 18
  puts "Please wait for a while"
else
  puts "You're old!"
end

def square(x)
  x*x
end

p square(64)













