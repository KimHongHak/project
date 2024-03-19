use reqwest::Error;
use tokio::fs::File;
use tokio::io::{self, AsyncBufReadExt};

async fn get_request(x: String) -> Result<(), Error> {
    let s = format!("http://dictionary.tovnah.com/?q={}&btnG=Search&dic=all", x);
    let response = reqwest::get(&s).await?;
    println!("Status: {}", response.status());

    let body = response.text().await?;
    println!("Body:\n{}", body);

    Ok(())
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let file = File::open("src/words.txt").await?;
    let reader = io::BufReader::new(file);

    let mut lines = reader.lines();

    let mut count = 0;

    while let Some(line) = lines.next_line().await? {
        println!("{} ", line);
        get_request(line).await?;

        count += 1;
        println!("{}", count);
    }

    Ok(())
}
