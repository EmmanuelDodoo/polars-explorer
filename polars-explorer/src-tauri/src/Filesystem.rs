use rfd::FileDialog;
use std::path::PathBuf;

pub fn open_file_dialog() -> Option<PathBuf> {
    // Creates a native file dialog for the user to select a csv file
    FileDialog::new()
        .add_filter("csv", &["csv"])
        .set_directory(PathBuf::from("/"))
        .pick_file()
}

pub fn save_file_dialog() -> Option<PathBuf> {
    FileDialog::new()
        .add_filter("csv", &["csv"])
        .set_directory("/")
        .save_file()
}